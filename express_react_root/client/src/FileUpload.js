<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> FileUpload and PeopleList component works
import React, { Component } from 'react';

//Source: npm express-fileupload



//Next step: Parse csv content to JSON, use upload API call

class FileUpload extends Component {

    state = { success: 'Data recieved will be displayed here' };


    mountComponent() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ success: "true"}))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/csvUpload');
        
        console.log(response);
        
        const body = await response.json();
        console.log(body);

        
        if (response.status !== 200) {
            throw Error(body.message) 
          }
      
        return body;
    }

    handleClick = () => {
        this.setState({success: 'true'});
      };
    
    render() {
      return (
        
       <div>
        <button onClick={this.handleClick}>
          Upload
        </button>

        <form ref='uploadForm' 
      id='uploadForm' 
      action='/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="sampleFile" />
        <input type='submit' value='Upload!' />
    </form>  


        <div id="db_contents">
            {this.state.success}

        </div>
       
            
            </div>
 

      );
    }
  
  
  }
  
  
  export default FileUpload;
<<<<<<< HEAD
=======
=======
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ReactFileReader from 'react-file-reader';

export default class FileUpload extends Component {
  state = {
    fileUpload_status: 'false',
    isAvailable: false,
  }

  handleFiles = files => {
    var reader = new FileReader();
    const t_his = this;
    reader.onload = function (e) {
      // Use reader.result
      var csv = reader.result;
      var lines = csv.split(/\r\n|\n/);
      var result = [];
      var headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        const removeQuotesFromLine = lines[i].replace(/['"]+/g, '');
        var currentline = removeQuotesFromLine.split(",");
        for (var j = 0; j < headers.length; j++) {
          const removeQuotesFromHeaders = headers[j].replace(/['"]+/g, '');
          obj[removeQuotesFromHeaders] = currentline[j];
        }
        delete obj['Timestamp'];
        result.push(obj);
      }


      t_his.setState({
        data: JSON.stringify(result, null, 4),
        isAvailable: true
      })
    }
    reader.readAsText(files[0]);
    // format json as standard json object
  }
  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        {this.state.isAvailable &&

          <pre>{this.state.data}</pre>

        }
      </div>
    );
  }
}
>>>>>>> FileUpload and PeopleList component works
>>>>>>> FileUpload and PeopleList component works
