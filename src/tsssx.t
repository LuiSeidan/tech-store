import React from 'react'
import './Campain.css'

const ConfigCampain = () => {
  return (
    <div>
      <div className="regla_frame d-flex justify-content-end align-items-center mt-3 mr-5">
        <div className="regla_frame container">
          <form>
            <div className="mb-4">
              <h2>Tipo de Campaña</h2>
            </div>
            <div className="mb-3">
              <label className="form-label">Regla de disparo:</label>
              <p>Welcome Kit</p>
            </div>

            <div className="mb-3">
              <label htmlFor="campaignName" className="form-label">
                Nombre esta campaña
              </label>
              <input
                type="text"
                className="form-control"
                id="campaignName"
                placeholder="Buscar por nombre o asunto"
              />
            </div>
            <div className="d-flex">
              <div className="mb-3">
                <label className="form-label">Grupo</label>
                <select className="form-select">
                  <option>Seleccionar</option>
                  {/* Otras opciones */}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Prioridad</label>
                <select className="form-select">
                  <option>Seleccionar</option>
                  {/* Otras opciones */}
                </select>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="forceSend"
                />
                <label className="form-check-label" htmlFor="forceSend">
                  Forzar Envío
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Seleccione un segmento</label>
              <select className="form-select">
                <option>Sin segmentación</option>
                {/* Otras opciones */}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Condición de disparo</label>
              <select className="form-select">
                <option>Creación del cliente</option>
                {/* Otras opciones */}
              </select>
            </div>

            <div className="d-flex">
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="text"
                    name="shootDay"
                    id="shootDay"
                  />
                </div>
              </div>
              <div>
                <select className="form-select">
                  <option>Dia</option>
                </select>
              </div>
              <div>
                <label className="form-label">después de </label>
              </div>
              <div className="d-flex">
                <div>
                  <label className="form-label">Creación del cliente </label>
                </div>
                <div>
                  <label className="form-label">a las </label>
                </div>
              </div>
              <div>
                <select className="form-select">
                  <option>15hs.</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="form-label col-sm-2 col-form-label">
                Vencimiento
              </label>
              <div className="col-md-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="expiration"
                    id="off"
                  />
                  <label className="form-check-label" htmlFor="off">
                    Off
                  </label>
                </div>
              </div>
              <div className="col-md-2">
                <label htmlFor="startDate" className="form-label">
                  Desde
                </label>
                <input type="date" className="form-control" id="startDate" />
              </div>
              <div className="col-md-2">
                <label htmlFor="endDate" className="form-label">
                  Hasta
                </label>
                <input type="date" className="form-control" id="endDate" />
              </div>
            </div>

            <div className="mb-4">
              <h2>Configuración de E-mail</h2>
            </div>
            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="subject" className="form-label">
                  Asunto
                </label>
                <input type="text" className="form-control" id="previewText" />
              </div>

              <div className="mb-3 col-md-3">
                <select className="form-select" id="subject">
                  <option>Campos dinámicos</option>
                  {/* Otras opciones */}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="subject" className="form-label">
                  Vista preliminar del texto:
                </label>
                <input type="text" className="form-control" id="previewText" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="fromEmail" className="form-label">
                De
              </label>
            </div>

            <div className="row">
              <div className="d-flex">
                <div className='mr-2'>
                  <label htmlFor="fromName" className="form-label">
                    E-mail
                  </label>
                </div>
                <div >
                  <input
                    type="email"
                    className="form-control"
                    id="fromEmail"
                    placeholder="hola@coolbox.com.pe"
                  />
                </div>
                <div className='mr-2'>
                  <label htmlFor="fromName" className="form-label">
                    Nombre
                  </label>
                </div>
                <div>
                  <input
                    type="text" className="form-control" id="previewText"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="utmFields" className="form-label">
                Campos UTM
              </label>
            
            </div>

            <div className="row">
              <div className="d-flex">
                <div className="mr-3">
                  <label htmlFor="fromName" className="form-label">
                    Source
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    id="fromEmail"
                    placeholder="hola@coolbox.com.pe"
                  />
                </div>
                <div className="mr-2">
                  <label htmlFor="fromName" className="form-label">
                  Campaign
                  </label>
                </div>
                <div>
                  <input
                    type="text" className="form-control" id="previewText"
                  />
                </div>
                
              </div>
              <div className="d-flex">
              <div >
                  <label htmlFor="fromName" className="form-label">
                    Medium
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    id="fromEmail"
                    placeholder="hola@coolbox.com.pe"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConfigCampain
