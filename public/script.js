const root = ReactDOM.createRoot(document.getElementById("root"));

let page = <>
   <h1>Rendering XML</h1>
   <button onClick={makePic}>Show Picture</button>
</>;

root.render(page);

function makePic() {
   let altText = "Sunflower Picture Not Shown";
   let new_code = <img src="flower.jpg" alt={altText}></img>;

   root.render(<>{page} <br></br> {new_code}</>);
}
