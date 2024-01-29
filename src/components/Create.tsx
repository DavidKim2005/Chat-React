import React, { useState } from "react";

function Create() {
    const [postMessage, setPostMessage] = useState<PostMessage>({
        nickname: '',
        message: ''
    });

    interface PostMessage {
        nickname: string;
        message: string
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();

        data.set('message', postMessage.message)
        data.set('nickname', postMessage.nickname)
        

        const response = await fetch(url, {
            method: 'post',
            body: data,
        });

        const responseData = await response.json()
        console.log(responseData);
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Nickname</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputMessage1">Message</label>
                    <input type="text" className="form-control" id="exampleInputMessage1" />
                </div>
                <div className="form-group form-check">
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Create

// не понимаю как создать two-way-binding для инпутов