import s from './Post.module.css';

const Post = () => {
   return (
      <div className={s.item}>
         <img src="https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg"></img>
         post 1
         <div>
            <span>like</span>
         </div>
      </div>
   );
}

export default Post