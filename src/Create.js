import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [power, setPower] = useState('Mangekyo Sharingan');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, power };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsLoading(false);
            //history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Power:</label>
                <select
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                >
                    <option value="Mangekyo Sharingan">Mangekyo Sharingan</option>
                    <option value="Rinnegan">Rinnegan</option>
                    <option value="Byakugan">Byakugan</option>
                    <option value="Karma">Karma</option>
                    <option value="Sage Mode">Sage Mode</option>
                    <option value="8 gates">8 gates</option>
                    <option value="Immortality">Immortality</option>
                    <option value="Samurai">Samurai</option>
                    <option value="Healing">Healing</option>
                    <option value="Scientific ninja tools">Scientific ninja tools</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;