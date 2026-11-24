import { useEffect, useRef } from 'react'
import L from 'leaflet'
import s from './App.module.css'
import { Menu } from './components/menu'

function App() {
  const mapRef = useRef(null)

  useEffect(() => {
    const position = [51.505, -0.09]
    const map = L.map(mapRef.current, {
      center: position,
      zoom: 13,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
    

    L.marker(position)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup. <br /> Easily customizable.')

    return () => map.remove()
  }, [])

  return (
    <>
      <Menu />
      <div className={s.wrapHome}>
        <div ref={mapRef} className={s.map} />
      </div>
    </>
  )
}

export default App
