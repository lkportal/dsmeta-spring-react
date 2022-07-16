import NotificationButton from '../Notification/NotificationButton'
import './style.css'


function Sales(){
    return(
        <div className = 'dsmeta-card'>
        <h2 className="dsmeta-title-vendas">Vendas</h2>
        <div>
            <div className="dsmeta-format-control-div">
                <input className="dsmeta-format-control" type="text"/>
            </div>
                <div className="dsmeta-format-control-div">
                    <input className="dsmeta-format-control" type="text"/>
                </div>
                </div>
            
            <div>

                <table className ="ddmeta-sale-table">
                    <thead>
                        

                        <tr>
                            <th className = "show992">ID</th>
                            <th className = "show576">Data</th>
                            <th className = "show992">Visitas</th>
                            <th className = "show992">Vendas</th>
                            <th>vedendor </th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                         
                            <tr>
                                <th className = "show992">#341</th>
                                <th className = "show576">08/07/2005</th>
                                <th>Anakin</th>
                                <th className = "show992">15</th>
                                <th className = "show992">11</th>
                                <th>R$5378.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-conteiner">

                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                    
                                
                                </th>
                            </tr>
                       
                      
                            <tr>
                                <th className = "show992">#342</th>
                                <th className = "show576">10/07/2002</th>
                                <th>Anakin</th>
                                <th className = "show992">15</th>
                                <th className = "show992">11</th>
                                <th>R$12458.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-conteiner">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                
                                </th>
                            </tr>
                        
                            <tr>
                                <th className = "show992">#343</th>
                                <th className = "show576">10/10/2012</th>
                                <th>Anakin</th>
                                <th className = "show992">15</th>
                                <th className = "show992">11</th>
                                <th>R$2500.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-conteiner">
                                        <div className="dsmeta-red-btn">
                                           <NotificationButton/>
                                    </div>
                                </div>
                                </th>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    

    )
}

export default Sales