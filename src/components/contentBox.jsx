import React from "react";
import { BsHddStack } from "react-icons/bs";
import styled from "styled-components";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import preview from "../assets/preview.png";
import content from "../assets/content.png";
//import { HiOutlineSignal } from 'react-icons/hi';

export default function ContentBox() {
    const images = [
      {
        image: image1,
        minute: "1.15",
        content1: "Why Web2 sucks?",
        content2: "Some important facts that matter.",
        Date: "22 Jan 2022",
        Views: "69",
        Comments: "5",
        Likes: "30",
        Preview: "Preview"
      },
      {
        image: image2,
        minute: "1.05",
        content1: "You should not use..",
        content2: "Some important facts that matter.",
        Date: "16 Jan 2022",
        Views: "56",
        Comments: "5",
        Likes: "45",
        Preview: "Preview"
      },{
        image: image3,
        minute: "1.25",
        content1: "Web2 is the worst...",
        content2: "Some important facts that matter.",
        Date: "12 Jan 2022",
        Views: "45",
        Comments: "5",
        Likes: "23",
        Preview: "Preview"
      },
      {
        image: image4,
        minute: "1.05",
        content1: "You still using Web2",
        content2: "Some important facts that matter.",
        Date: "16 Jan 2022",
        Views: "56",
        Comments: "5",
        Likes: "25",
        Preview: "Preview"
      },
      {
        image: image5,
        minute: "1.25",
        content1: "Web2 makes me sick",
        content2: "Some important facts that matter.",
        Date: "12 Jan 2022",
        Views: "45",
        Comments: "5",
        Likes: "27",
        Preview: "Preview"
      },
      {
        image: image1,
        minute: "1.15",
        content1: "Why Web2 sucks?",
        content2: "Some important facts that matter.",
        Date: "22 Jan 2022",
        Views: "69",
        Comments: "5",
        Likes: "30",
        Preview: "Preview"
      },
      {
        image: image2,
        minute: "1.05",
        content1: "You should not use..",
        content2: "Some important facts that matter.",
        Date: "16 Jan 2022",
        Views: "56",
        Comments: "5",
        Likes: "45",
        Preview: "Preview"
      },{
        image: image3,
        minute: "1.25",
        content1: "Web2 is the worst...",
        content2: "Some important facts that matter.",
        Date: "12 Jan 2022",
        Views: "45",
        Comments: "5",
        Likes: "23",
        Preview: "Preview"
      },
      {
        image: image4,
        minute: "1.05",
        content1: "You still using Web2",
        content2: "Some important facts that matter.",
        Date: "16 Jan 2022",
        Views: "56",
        Comments: "5",
        Likes: "25",
        Preview: "Preview"
      }
    ]

    return (
        <Section>
          <div className="title-container">
            <div className="title">
              <h3>Content  <img src={content} alt="content" className="contentimage" /></h3>
              
            </div>
            </div>
            
            <div className="maindiv">
            <div className="header">
               
               <h5 className="headervideo">Videos</h5>
               <h5 className="headermusic">Music</h5>
               <h5 className="headerpicture">Pictures</h5>
           </div>

           <div className="subheader">
            <h6 className="v1">Video</h6>
            <h6 className="v2">Date</h6>
            <h6 className="v3">Views</h6>
            <h6 className="v4">Comments</h6>
            <h6 className="v5">Likes</h6>
            <h6 className="v6">Preview</h6>
           </div>

          <div className="active">
        {images.map((data , index) => {
          return (
            <div className="content">
              <div className="image">
                <img src={data.image} alt={data.minute} />
                <h5>{data.minute}</h5>
              </div>
              <div className="text">
                <h2>{data.content1}</h2>
                <h4>{data.content2}</h4>
              </div>
              <h5>{data.Date}</h5>
              <h5>{data.Views}</h5>
              <h5>{data.Comments}</h5>
              <h5>{data.Likes}</h5>
              <h5 className="previewclass"><img src={preview} alt="preview" className="previewimage" />{data.Preview}</h5>
            </div>
          );
        })}
        </div>
      </div>
            </Section>
    );
}

const Section = styled.section`

  color: white;
  margin-left: 100px;
  margin-right:95px;
 
  .contentimage{
    padding-left: 5px;
   height: 1.1rem;
  }

  .previewimage{
    padding-right: 5px;
  }

  .previewclass{
    padding-right: 30px;
  }
  
  .title-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2rem;
    .title {
      h3 {
        font-size: 1.5rem;
      }
      
      
    }
}



.maindiv {
    
    .header{
        display: flex;
            align-items: center;
            justify-content: space-between;
            width:20%;
            font-size: 17px;
            margin-top: 30px;
            cursor: pointer;
            
            .headervideo{
                color: #F3F3F3;
                border-bottom: 0.1rem solid #F3F3F3;
                

            }
            .headermusic{
                color: #A3A3A3;

            }
            .headerpicture{
                color: #A3A3A3;
            }
    }
    .subheader{
        display:flex;
        color: #646464;
        font-size: 15px;
        padding-top: 5px;

        .v1{
            margin-right: 333px;
        }
        .v2{
            margin-right: 213px;
            margin-left: -1px;
        }
        .v3{
            margin-right: 108px;
            margin-left: -44px
        }
        .v4{
            margin-right: 100px;
        }
        .v5{
            margin-left: -20px;
            margin-right: 112px;
        }
       
    }
    
    box-shadow: inset 0px 3px 20px rgba(200, 200, 200, 0.25);
    border-radius: 10px;
    background-color: black;
    overflow: auto;
    display: flex;
   
    max-height: 34.5rem;
    flex-direction: column;
    gap: 1rem;
    padding-right: 4rem;
    padding-left: 3rem;
    margin: 2.5rem 0;
    
    
    h5 {
      font-weight: 100;
    }
    
    .active{
       overflow: auto;
       ::-webkit-scrollbar {
        
        width: 0.2rem;
        background-color: #6e6e6ec3;
        &-thumb {
            
          background-color: #b8b8b8;
        }
      }


        
    .content {
        
        border-top: 0.1rem solid #242424;
    padding-top: 12px;
    padding-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .text{
        margin-left:-100px;
        h2{
            font-size: 15px;
            color: white;
        }
        h4{
            font-size: 10px;
            margin-top: 2px;
            color: grey;

        }
      }
      .image {
        display: flex;
        flex-direction: column;
        
        
        img {
          height: 3rem;
          border-radius: 15px;
        }
        h5{
            color: #9F9F9F;
            font-weight: 100;
            font-size: 12px;
            line-height: 19px;
            text-align: right;
        }
      }
    }
}
  }
`;