import {FormInput, FormIconInput, FormDualLayout, FormImage} from '../../components/Ui/Input/Input'
import Button from '../../components/Ui/Button/Button'
import Layout from '../../components/Ui/Layout/Layout'
import { CiLocationOn } from "react-icons/ci";
export default function Dashboard(){
    return(<>
        <div className="container">
            <Layout title="Event Title">
                <FormInput title="Event Title"  placeholder="Enter title"/>
                <FormDualLayout>
                    <FormInput title="Category" placeholder="Enter Category"/>
                    <FormInput title="Capacity" placeholder="Enter Capacity"/>    
                </FormDualLayout>
                <FormInput title="Date & Time" placeholder="Enter Date"/>
                {/* <FormInput title="Venue Location" placeholder="Search Venue..."/> */}
                <FormIconInput title="Venue Location" placeholder="Search Venue..." icon={CiLocationOn}/>
                <FormInput title="Ticket Price ($)" placeholder="0.00"/>
                <FormImage title="Event Image"/>
                <Button>Publish Event</Button>
            </Layout>
        </div>
    </>)
}