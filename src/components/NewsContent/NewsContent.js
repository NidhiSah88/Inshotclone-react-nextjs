import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({newsArray, newsResults, loadMore, setloadmore}) => {
    return ( 
    
        <Container maxWidth="md"> 

        {/* news Content */}
        <div className="content">
            <div className="downloadMessage">
                <span className="downloadText">
                    For the best experince use inshorts app on your smart phone 
                </span>
                <img
                    alt="app store"
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/appstore.png"
                />
                <img
                    alt="play store"
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/playstore.png"
                />

            </div>
               {/* First this */}
                {newsArray.map((newsItem) => (
                <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}

                {/* Then this */}
                {loadMore <= newsResults && (
                <>
                    <hr />
                    <button
                    className="loadMore"
                    onClick={() => setloadmore(loadMore + 20)}
                    >
                    Load More
                    </button>
                </>
                )}
        </div>
        </Container>
         
    );
};

export default NewsContent;