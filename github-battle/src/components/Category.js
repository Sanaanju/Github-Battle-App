import React from "react";
import All from "./All";

class Category extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: null,
            lang: "all"
        }
    }

    componentDidMount() {
      this.fetchData();
    }
    

     handleClick = ({target}) => {
       let id = target.dataset.id;
       this.setState({
            lang: id, data: null
       }, () => this.fetchData())
     }

     fetchData = () => {
         fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.lang}&sort=stars&order=desc&type=Repositories`)
         .then((res) => res.json())
         .then((data) => {
             this.setState({data: data.items})
         })
     }
    

     render() {  
            let lang = this.state.lang;
         return (
            <main className="px-12 lg:px-16 2xl:px-64 pt-8 py-16">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center text-xl font-bold my-4 ">
                    <h3 className={lang === "all" ? "inline-block cursor-pointer text-red-600 mx-4" : "inline-block cursor-pointer mx-6"} data-id="all" onClick={(e) => this.handleClick(e)}>All</h3>

                    <h3 className={lang === "javascript" ? "inline-block cursor-pointer text-red-600 mx-6" : "inline-block cursor-pointer mx-6"}  data-id="javascript" onClick={(e) => this.handleClick(e)}>JavaScript</h3> 

                    <h3 className={lang === "ruby" ? "inline-block cursor-pointer text-red-600 mx-6" : "inline-block cursor-pointer mx-6"} data-id="ruby" onClick={(e) => this.handleClick(e)}>Ruby</h3>

                    <h3 className={lang === "java" ? "inline-block cursor-pointer text-red-600 mx-6" : "inline-block cursor-pointer mx-6"} data-id="java"  onClick={(e) => this.handleClick(e)}>Java</h3>

                    <h3 className={lang === "Css" ? "inline-block cursor-pointer text-red-600 mx-6" : "inline-block cursor-pointer mx-6"} data-id="Css"  onClick={(e) => this.handleClick(e)}>CSS</h3>

                    <h3 className={lang === "python" ? "inline-block cursor-pointer text-red-600" : "inline-block cursor-pointer"} data-id="python"  onClick={(e) => this.handleClick(e)}>Python</h3>
                </div>

                
                {
                    this.state.data ? < All data = {this.state.data} darkMode={this.props.darkMode}/> : < h2 className="text-center text-2xl font-bold py-8">Loading...</h2>
                }
             
             </main>      
            
         )
     }
} 

export default Category;