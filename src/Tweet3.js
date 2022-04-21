import React, {Component} from "react";

const Time = () => <span className="time">1hr ago</span>;
const CommentButton = () => <i className="far fa-comment" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const ShareButton = () => <i className="fas fa-external-link-alt" />;

export default class Tweet3 extends Component {
    render() {
        console.log(this.props);
      return (
          <div className='Tweet'>
                <UserProfileImage/>
                {/* <div className="userImage">
                    <img src={this.props.myTweetObj.userImage}/>
                </div> */}
                <div className="TweetContent">
                    <div>
                        <span className='name-with-handle'>
                            <span className='name'>{this.props.myTweetObj.name}</span>
                            <span className='name'> @{this.props.myTweetObj.handle}</span>
                            <Time/>
                        </span>
                    </div>
                    <div className="TweetMessage">
                        {this.props.myTweetObj.Message}
                    </div>
                    <div className='Buttons'>
                        <LikeButton/>
                        <CommentButton/>
                        <RetweetButton/>
                        <ShareButton/>
                    </div>
                </div>
          </div>
         
      )
    }
  }

 //Functions to be Nested in main Tweet Class
 function UserProfileImage(){
    return(
            <div>
               <img src='https://rayyangafoor-memoryghost.carrd.co/assets/images/image04.jpg?v=97b6705f'
               className="UserProfileImage"
               alt="UserProfileImage"
               />
            </div>
    );

}
function Message(){
return(
    <div className='TweetMessage'>
        This is the Tweet...
    </div>
);
}
function NameAndHandle(){
return(
    <div>
        <span className='name-with-handle'>
            {/* <span className='name'>{this.props.myTweetObj.name}</span> */}
            {/* <span className='name'> @{this.props.myTweetObj.handle}</span> */}
        </span>
    </div>
    

);
}