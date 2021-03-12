

console.log('hello world');


async function fetch(){
    // const api_url = `/test/${season}`;
    const api_url = '/test'
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json)
}
