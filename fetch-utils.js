const SUPABASE_URL = 'https://vrgnnbxjpirhnspwbtxy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZ25uYnhqcGlyaG5zcHdidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDM4ODksImV4cCI6MTk2Nzg3OTg4OX0.pLi2lpE10QoZGWcQundIQW6sYkcpvCsuLewA1q7lto8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getHikes() {
    const resp = await client.from('Hikes').select('*');
    return resp.data;
}

export async function getHike(id) {
    const resp = await client.from('Hikes').select('*').match({ id: id }).single();
    return resp.data;
}
getHikes();