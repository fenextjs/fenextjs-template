import { ChangeLang } from "@/components/ChangeLang"
import { Img } from "@/ui-fenextjs/Img"
import { Title } from "@/ui-fenextjs/Title"
import { ButtonMenu } from "fenextjs"

export interface HeaderDashboardProps {

}

export const HeaderDashboard = ({ }: HeaderDashboardProps) => {
    return <>
        <div className="header-dashboard">
            <ButtonMenu >
                <div className="header-dashboard-logo">
                    <Img src="https://fenextjs-doc.vercel.app/favicon.png" />
                    <Title tag="h4">Fenextjs</Title>
                </div>
            </ButtonMenu>
            <div>
                <ChangeLang />
            </div>
        </div>
    </>
}