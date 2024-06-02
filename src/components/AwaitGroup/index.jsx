import { Await } from "react-router-dom";

function ArrayAwaitGroup({ children, resolve: [now, ...next], args = [] }) {
    if(next.length) { 
        return (
            <Await resolve={now}>
                {
                    (arg) => (
                        <ArrayAwaitGroup args={[...args, arg]} resolve={next}>
                            {children}
                        </ArrayAwaitGroup>
                    )
                }
            </Await>
        );
    }

    return (
        <Await resolve={now}>
            { (lastArg) => children(...args, lastArg) }
        </Await>
    );
}

const ObjectAwaitGroup = ({ children, resolve, args = {} }) => {
    // eslint-disable-next-line no-prototype-builtins
    const current = Object.keys(resolve).find(key => !args.hasOwnProperty(key));

    if(current) {
        return (
            <Await resolve={resolve[current]}>
                {
                    (arg) => (
                        <ObjectAwaitGroup args={{ ...args, [current]: arg }} resolve={resolve}>
                            {children}
                        </ObjectAwaitGroup>
                    )
                }
            </Await>
        );
    }

    return children(args);
}

export default function AwaitGroup({ children, resolve }) {
    const props = { children, resolve };
    if(Array.isArray(resolve)) {
        return <ArrayAwaitGroup {...props} />;
    }

    return <ObjectAwaitGroup {...props} />;
}