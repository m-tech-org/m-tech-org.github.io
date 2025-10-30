import GlobalConstants from "../../constants/GlobalConstants.tsx";

export default function footerText() {
    return '© 2021 - ' + new Date().getFullYear() + ' ' + GlobalConstants.COMPANY_NAME + ' — ' + GlobalConstants.COMPANY_MOTTO
}