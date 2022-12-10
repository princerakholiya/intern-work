import React from "react";
import { BsHddStack } from "react-icons/bs";
import styled from "styled-components";
import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";
// import image4 from "../assets/image4.png";
// import image5 from "../assets/image5.png";
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
        image: image1,
        minute: "1.15",
        content1: "Why Web2 sucks?",
        content2: "Some important facts that matter.",
        Date: "22 Jan 2022",
        Views: "69",
        Comments: "5",
        Likes: "30",
        Preview: "Preview"
      },{
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
        image: image1,
        minute: "1.15",
        content1: "Why Web2 sucks?",
        content2: "Some important facts that matter.",
        Date: "22 Jan 2022",
        Views: "69",
        Comments: "5",
        Likes: "30",
        Preview: "Preview"
      }
    ]

    return (
        <Section>
          <div className="title-container">
            <div className="title">
              <h3>Content</h3>
             
            </div>
            </div>
            
            <div className="maindiv">
            <div className="header">
               
               <h5>Videos</h5>
               <h5>Music</h5>
               <h5>Pitchurs</h5>
           </div>

           <div className="subheader">
            <h6 className="v1">Video</h6>
            <h6 className="v2">Date</h6>
            <h6 className="3">Views</h6>
            <h6 className="4">Comments</h6>
            <h6 className="5">Likes</h6>
            <h6 className="6">Preview</h6>
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
              <h5>{data.Preview}</h5>
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
  margin-left: 50px;
  margin-right: 50px;
  height: 80%;
  
  .title-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 1rem;
    .title {
      h3 {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
      }
    }
}



.maindiv {
    
    .header{
        display: flex;
            align-items: center;
            justify-content: space-between;
            width:20%;
            margin-top: 20px; 
    }
    .subheader{
        display:flex;
        .v1{
            width:45%;
        }
        .v2{
            width: 20%;
        }
    }
    
    box-shadow: inset 0px 3px 20px rgba(200, 200, 200, 0.25);
    border-radius: 10px;
    background-color: black;
    overflow: auto;
    display: flex;
    max-height: 34rem;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin: 3rem 0;
    
    h5 {
      font-weight: 100;
    }
    
    .active{

        

        
    .content {
        
        border-top: 0.1rem solid #242424;
        
      display: flex;
      align-items: center;
      justify-content: space-between;
      ::-webkit-scrollbar {
        width: 0.2rem;
        background-color: #6e6e6ec3;
        &-thumb {
          background-color: #b8b8b8;
        }
      }
      .image {
        display: flex;
        flex-direction: column;
        
        
        img {
          height: 3rem;
          border-radius: 2rem;
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