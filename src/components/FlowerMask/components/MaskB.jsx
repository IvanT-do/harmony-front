export default function MaskB({ children, id, ...props }) {
    return (
        <svg
            viewBox="0 0 382 382"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            { children }
            <defs>
                <mask id={id}>
                    <path  fillRule="evenodd" clipRule="evenodd" d="M56.2604 55.8887C37.1568 74.9923 30.2575 101.679 35.5627 126.26C14.4302 139.889 0.438477 163.638 0.438477 190.655C0.438473 217.671 14.4302 241.42 35.5627 255.051C30.2575 279.631 37.1568 306.317 56.2604 325.422C75.3642 344.524 102.051 351.424 126.631 346.12C140.261 367.252 164.01 381.243 191.027 381.243C218.043 381.243 241.792 367.252 255.423 346.12C280.003 351.424 306.689 344.524 325.794 325.422C344.896 306.317 351.795 279.631 346.491 255.051C367.624 241.42 381.615 217.671 381.615 190.655C381.615 163.638 367.624 139.889 346.491 126.26C351.795 101.679 344.896 74.9925 325.794 55.8887C306.689 36.7851 280.003 29.8858 255.423 35.191C241.792 14.0584 218.043 0.0667114 191.027 0.0667114C164.01 0.0667114 140.261 14.0584 126.631 35.1908C102.051 29.8858 75.3642 36.7851 56.2604 55.8887Z" fill="#fff"/>
                </mask>
            </defs>
        </svg>
    );
}