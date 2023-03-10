import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src='https://images.unsplash.com/photo-1543304216-b46be324b571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2181&q=80'></img>
         </div>
         <div>
            ava + desc
         </div>
         <MyPosts />
      </div>
   );
}

export default Profile