

export default function MYgtag(event, action, params){
	if(event === 'event'){
		console.log('gtag events')
			window.gtag('event', action, params)}
}
