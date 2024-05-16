import SvgIcon from "../SvgIcon";

export default function Book({ ...props }) {
    return (
        <SvgIcon viewBox="0 0 17 17" {...props}  fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.47949 12.7501V4.95841C2.47949 2.12508 3.18783 1.41675 6.02116 1.41675H10.9795C13.8128 1.41675 14.5212 2.12508 14.5212 4.95841V12.0417C14.5212 12.1409 14.5212 12.2401 14.5141 12.3392"/>
            <path d="M4.49824 10.625H14.5212V13.1042C14.5212 14.4713 13.4091 15.5833 12.042 15.5833H4.95866C3.59158 15.5833 2.47949 14.4713 2.47949 13.1042V12.6438C2.47949 11.5317 3.38616 10.625 4.49824 10.625Z"/>
            <path d="M5.66699 4.95825H11.3337"/>
            <path d="M5.66699 7.4375H9.20866"/>
        </SvgIcon>
    );
}
