import "../Component-Styles/item.scss";
export default function Item({description, imgSrc, subject, tags}){
	return(
		<div className="container">
		    <div className="post">
		        <div className="header_post">
		            <img src={imgSrc} alt="" />
		        </div>
		
		        <div className="body_post">
		            <div className="post_content">
		
		                <h1>Lorem Ipsum</h1>
		                <p>{description}</p>
		
		                <div className="container_infos">
		                    <div className="postedBy">
		                        <span>subject</span>
													{subject}
		                    </div>
		
		                    <div className="container_tags">
		                        <span>tags</span>
		                        <div className="tags">
		                            <ul>
		                                <li>{subject}</li>
		                                <li>Museum</li>
		                            </ul>
		                        </div>
		
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	)
}