import React, { useEffect, useState } from 'react';

function Home() {

    const [stories, setStories] = useState([]);
    const [storyData, setStoryData] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json", { method: "GET" }).then(res => res.json()).
            then(res => {
                setStories(res);
            }).catch(error => console.log(error));
    }, []);

    const addMore = () => {
        setPage(page + 30);

    }
    const getDomainName = (url) => {
        let newUrl = url;
        if (url) {
            if (url.indexOf("//") > -1) {
                newUrl = url.split("/")[2];
            } else {
                newUrl = url.split("/")[0];
            }

        }


        return newUrl;
    }
    useEffect(() => {
        setStoryData([]);
        var count = page;
        stories.slice(page, page + 30).forEach((storyId) => {
            fetch("https://hacker-news.firebaseio.com/v0/item/" + storyId + ".json?print=pretty", { method: "GET" }).then(res => res.json()).
                then(res => {
                    if (res !== undefined) {
                        count = count + 1;
                        res.itemCount = count;
                        setStoryData(prevState => [...prevState, { res }]);
                    }

                }).
                catch(error => console.log(error));
        });
    }, [stories, page]);

    return (
        <React.Fragment>
            {storyData.map((item, key) => {
                return (
                    <div className="newsList">
                        <div className="count">{item.res.itemCount}</div>
                        <div>
                        <div className="newsTitle">
                            <div className="title">{item.res.title}</div><span className="url">({getDomainName(item.res.url)})</span>
                        </div>
                        <div className="description">
                            <span>{item.res.score} points by</span> <span>{item.res.by}</span>
                        </div></div>
                    </div>
                );
            })}
            {storyData.length <= 30 ? <a onClick={addMore}>More</a> : ''}

        </React.Fragment>
    )
}
export default Home;