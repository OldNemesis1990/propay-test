import{W as o,j as d,a}from"./app-5460550b.js";function s(i){var l;const c=o(),n=async(e,t)=>{e.preventDefault(),confirm("Are you sure you want to delete this user?")&&c.delete(route("delete.users",{user_id:t})).on("success",r=>{console.log(r),i.props.data=r.data.data}).catch(r=>{console.error("Error deleting user:",r)})};return d("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[a("div",{className:"flex items-center justify-between",children:a("div",{className:"",children:"Users"})}),a("div",{className:"mt-4",children:(l=i.props.data.users)==null?void 0:l.map(e=>{var t;return d("div",{className:`mt-4 grid lg:grid-cols-6 gap-4 p-3 border-[1px] ${e!=null&&e.activated?"border-lime-500":"border-red-500"}`,children:[d("div",{className:"text-gray-800 dark:text-gray-200",children:[a("p",{children:"Full Name"}),d("p",{children:[e==null?void 0:e.name," ",e.surname]})]}),d("div",{className:"text-gray-800 dark:text-gray-200 break-normal break-words",children:[a("p",{children:"Email"}),a("p",{children:e==null?void 0:e.email})]}),d("div",{className:"text-gray-800 dark:text-gray-200",children:[a("p",{children:"Mobile Number"}),a("p",{children:(t=e==null?void 0:e.userinfo)==null?void 0:t.mobile_number})]}),d("div",{className:"text-gray-800 dark:text-gray-200",children:[a("p",{children:"activated"}),a("p",{children:e!=null&&e.activated?"yes":"no"})]}),a("div",{children:a("a",{href:`/edit-user/${e.id}`,children:a("button",{className:"dark:bg-lime-500 bg-lime-500 dark:text-gray-800 text-gray-800 rounded-md px-4 py-2 m-2",children:"Edit User"})})}),a("div",{children:a("a",{onClick:r=>{n(r,e.id)},children:a("button",{className:"dark:bg-rose-500 bg-rose-500 dark:text-gray-800 text-gray-800 rounded-md px-4 py-2 m-2",children:"Delete User"})})})]},e.id)})})]})}export{s as default};
