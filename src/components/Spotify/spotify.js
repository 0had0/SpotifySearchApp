import axios from "axios";

export const client_id = process.env.REACT_APP_CLIENT_ID; // Your client id
export const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
export const redirect_uri = process.env.REACT_APP_REDIRECT_URI; // Your redirect uri
export const state = "hello123";

const search = function(input, token, setItems, setError, setIsLoading) {
	setIsLoading(true);
	axios
		.get(
			"https://api.spotify.com/v1/search?q=" +
				input.split(" ").join("+") +
				"&type=artist",
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		.then(res => {
			console.log(res);
			setItems(res.data.artists.items);
			setIsLoading(false);
			if (res.data.artists.items.length === 0)
				setError({ message: "nothing found", severity: "info" });
		})
		.catch(error => {
			console.log(error);
			setIsLoading(false);
			setError(Object.assign({}, error, { severity: "error" }));
		});
};

const getAlbums = async function(id, token, setAlbums, setError, setIsLoading) {
	setIsLoading(true);
	axios
		.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => {
			console.log(res);
			setAlbums(res.data.items);
			setIsLoading(false);
			if (res.data.items.length === 0)
				setError({ message: "nothing found", severity: "info" });
		})
		.catch(error => {
			console.log(error);
			setIsLoading(false);
			setError(Object.assign({}, error, { severity: "error" }));
		});
};

export { getAlbums };
export default search;
