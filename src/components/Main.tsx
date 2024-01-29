import { useEffect, useState } from "react";
import { Card, CardBody } from "react-bootstrap";

function Main() {
    const [messages, setMessages] = useState<Messages[]>([])

    interface Messages {
        author: string;
        message: string;
        dateTime: string;
        id: string;
    }

    useEffect(() => {
        const url = 'http://146.185.154.90:8000/messages';

        let getUrl = async () => {
            let response = await fetch(url);
            const data: Messages[] = await response.json();
            setMessages(data);
        };

        getUrl();
    }, []);

    return (
        <>
            <Card>
                <CardBody>
                    {messages.map((message) => (
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">author: {message.author}</h5>
                                <p className="card-text">message: {message.message}</p>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </>
    )
}

export default Main