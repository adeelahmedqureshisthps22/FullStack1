import { useState, useEffect } from 'react'
import api from '../services/api'

function Home() {
  const [apiStatus, setApiStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApiStatus()
  }, [])

  const fetchApiStatus = async () => {
    try {
      const response = await api.get('/health')
      setApiStatus(response.data)
    } catch (error) {
      console.error('Error fetching API status:', error)
      setApiStatus({ status: 'error', message: 'Could not connect to API' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Welcome to FullStack1</h2>
        <p>This is a fullstack application with React frontend and Express backend.</p>
      </div>

      <div className="card">
        <h3>API Status</h3>
        {loading ? (
          <p>Checking API status...</p>
        ) : (
          <div>
            <p>Status: <strong>{apiStatus?.status || 'unknown'}</strong></p>
            {apiStatus?.timestamp && (
              <p>Last checked: {new Date(apiStatus.timestamp).toLocaleString()}</p>
            )}
          </div>
        )}
        <button className="button" onClick={fetchApiStatus} style={{ marginTop: '1rem' }}>
          Refresh Status
        </button>
      </div>
    </div>
  )
}

export default Home
