const Main = () => {
    return(
        <div>
            <h1>here is where you can see me</h1>
            <div 
            className="container"
            style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
            }}
            >
            <iframe 
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                bottom: "0",
                right: "0", 
            }}
            src="https://www.youtube.com/embed/pe3OWSp0f2k" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            </div>
        </div>
    );
}
export default Main;