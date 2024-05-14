export default function MaskA({ children, className, id }) {
    return (
        <svg
            className={className}
            viewBox="0 0 390 390"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            { children }
            <defs>
                <mask id={id}>
                    <path d="M225.135 307.305C135.2 435.194 16.101 366.432 81.8887 224.602C-46 134.667 22.7621 15.5679 164.592 81.3557C254.504 -46.527 373.626 22.229 307.838 164.059C435.703 253.905 366.942 373.099 225.135 307.305Z" fill="#fff"/>
                </mask>
            </defs>
        </svg>
    );
}