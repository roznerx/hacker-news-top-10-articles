import axios from 'axios';

export async function getTopArticles() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/topstories.json`
    );

    return res.data;
  } catch (error) {
    console.error('API call failed:', error.message)
  }
}

export async function getStory(id) {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/item/${id}.json`
    );
    
    return res.data;
  } catch (error) {
    console.error('Failed to fetch story:', error.message)
  }
}
