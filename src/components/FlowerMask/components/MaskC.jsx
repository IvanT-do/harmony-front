export default function MaskC({ children, id, ...props }) {
    return (
        <svg
            viewBox="0 0 348 348"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{transform: "scale(0.87)"}}
            {...props}
        >
            { children }
            <defs>
                <mask id={id}>
                    <path d="M243.722 244.109C382.759 383.153 -34.3335 383.153 104.704 244.109C-34.3335 383.153 -34.3335 -33.9383 104.704 105.086C-34.3335 -33.9383 382.759 -33.9383 243.722 105.086C382.759 -33.9383 382.759 383.153 243.722 244.109Z" fill="#fff"/>
                </mask>
            </defs>
        </svg>
    );
}