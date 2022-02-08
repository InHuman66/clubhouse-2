import {useRouter} from "next/router";
import { Header } from "../../components/Header";
import {Profile} from "../../components/Profile";

export default function ProfilePage () {

    return (
        <>
            <Header />
            <div className="container mt-30">
                <Profile
                    avatarUrl="http://ecscggo.com/assets/images/users/1.jpg"
                    fullName="Sanya Kis"
                    username="san4ez"
                    about="Test info"
                />
            </div>
        </>
    );
};