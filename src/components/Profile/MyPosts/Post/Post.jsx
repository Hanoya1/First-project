import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg"></img>
         {props.message}
         <div>
            <span>{props.likes}</span>
         </div>
      </div>
   );
}

export default Post