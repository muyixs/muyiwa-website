import axios from 'axios'

const baseUrl = ' https://api.soundcloud.com'

export default {
  fetchPlaylist: (playlistId) =>
    axios.get(`${baseUrl}/playlists/${playlistId}`, {
      headers: {
        client_id: process.env.scClientId,
      },
    }),
}
