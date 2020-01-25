import axios from "axios";

export const client_id = process.env.REACT_APP_CLIENT_ID; // Your client id
export const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
export const redirect_uri = process.env.REACT_APP_REDIRECT_URI; // Your redirect uri
export const scopes = process.env.REACT_APP_SCOPES;
export const state = "hello123";

const search = async function(input, token, setItems, setError, setIsLoading) {
	setIsLoading(true);
	await axios
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
	await axios
		.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => {
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

const isFollowing = async function(id, token, setIsLoading, type, setError) {
	setIsLoading(true);
	await axios
		.get(
			`https://api.spotify.com/v1/me/following/contains?type=${type}&ids=${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		.then(([res]) => {
			setIsLoading(false);
			return res;
		})
		.catch(error => {
			console.log(error);
			setIsLoading(false);
			setError(error);
			return null;
		});
};

const follow = async function(
	id,
	type,
	token,
	setError,
	setFollow,
	setIsLoading
) {
	await axios
		.put(`https://api.spotify.com/v1/me/following?type=${type}&ids=${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			const following = isFollowing(
				id,
				token,
				setIsLoading,
				type,
				setError
			);
			if (following) {
				setFollow(following);
			} else {
				setError({ message: "error" });
			}
		})
		.catch(error => setError(error));
};

export { getAlbums, isFollowing, follow };
export default search;
