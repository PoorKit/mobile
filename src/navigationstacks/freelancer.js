import { createNativeStackNavigator } from '@react-navigation/native-stack';
const FreelancerStack = createNativeStackNavigator();

import FreelancerHome from '../screens/freelancer/freelancerhome';
import FreelancerProfile from '../screens/freelancer/freelancerprofile';
import FreelancerJobPosts from '../screens/freelancer/freelancerjobposts';
import { JobsHeader } from '../components/user/jobsheader';
import FreelancerMessaging from '../screens/freelancer/freelancermessaging';
import FreelancerChats from '../screens/freelancer/freelancerchat';
import FreelancerProjects from '../screens/freelancer/freelancerprojects';
import FreelancerProject from '../screens/freelancer/freelancerproject';
import FreelancerServices from '../screens/freelancer/freelancerservices';
import FreelancerService from '../screens/freelancer/freelancerservice';

export default function FreelancerNavigator(props) {
  return (
    <FreelancerStack.Navigator initialRouteName='FreelancerHome' screenOptions={{headerShown: false, animation:'slide_from_right', navigationBarHidden:true, statusBarTranslucent:true, statusBarStyle:'dark', contentStyle:{backgroundColor:'mistyrose'}}}>
      <FreelancerStack.Screen name="FreelancerHome" component={FreelancerHome} />
    <FreelancerStack.Group screenOptions={{
      header: () => <JobsHeader params={props}/>,
      headerShown: true,
      }}>
        <FreelancerStack.Screen name="FreelancerJobPosts" children={()=><FreelancerJobPosts params={props}/>}/>
        <FreelancerStack.Screen name="FreelancerMessaging" component={FreelancerMessaging} options={{presentation:'transparentModal', headerShown: false, contentStyle:{backgroundColor:'transparent'}}}/>      
    </FreelancerStack.Group>
      <FreelancerStack.Screen name="FreelancerChats" component={FreelancerChats}/>
      <FreelancerStack.Screen name="FreelancerProjects" component={FreelancerProjects}/>
      <FreelancerStack.Screen name="FreelancerProject" component={FreelancerProject}/>
      <FreelancerStack.Screen name="FreelancerServices" component={FreelancerServices}/>
      <FreelancerStack.Screen name="FreelancerService" component={FreelancerService}/>

      <FreelancerStack.Screen name="FreelancerProfile" component={FreelancerProfile} />
    </FreelancerStack.Navigator>
  );
}