import AllEndUser from './components/Users/All.vue'
import CreateEndUser from './components/Users/Create.vue'
import CreateStaffs from './components/Users/Create-in.vue'
import GetUser from './components/Users/Get.vue'
import AllStaffs from './components/Users/All-in.vue'
// import Test from './components/Users/test.vue'
const routes = [{
  path: '/all',
  component: AllEndUser
},
{
  path: '/Create',
  component: CreateEndUser
},
{
  path: '/allstaffs',
  component: AllStaffs

}, {
  path: '/Createstaffs',
  component: CreateStaffs
},

{
  path: '/getuser/:id',
  component: GetUser,
  name: 'getuser'
}
// ,
// {
//   path: '/test',
//   component: Test
// }
]

export default routes
