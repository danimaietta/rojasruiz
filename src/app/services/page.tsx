import styles from './page.module.scss'
import { GrTools } from "react-icons/gr";
import { TbTools } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";

export default function Services() {

    return (
        <div className={styles['services-grid']}>
          <div>
            <p> INSTALACIÓN </p>
            <MdElectricalServices className={styles['installation-icon']} />
            <ul>
              <li>Generadores</li>
              <li>Eléctrica</li>
              <li>Transformadores</li>
              <li>Sistemas de Medición Electrónica</li>
              <li>Compresor de Aire Comprimido & Acometidas Eléctricas</li>
              <li>Sistema de Comprosores & red Aire Comprimido</li>
            </ul>
          </div>
          <div>
            <p> REMODELACIÓN </p>
            <GrTools className={styles['remodeling-icon']} />
            <ul>
              <li>Oficinas</li>
              <li>Sistema de Alarmas</li>
              <li>Tiendas</li>
              <li>Bodegas</li>
              <li>Civil y Electromecánica</li>
              <li>Morgue</li>
              <li>Hotel</li>
              <li>Diseño</li>
            </ul>
          </div>
          <div>
            <p> ASESORÍA </p>
            <TbTools className={styles['advisory-icon']} />
            <ul>
              <li>Generadores</li>
              <li>Eléctrica</li>
              <li>Transformadores</li>
              <li>Sistemas de Medición Electrónica</li>
              <li>Compresor de Aire Comprimido & Acometidas Eléctricas</li>
              <li>Sistema de Comprosores & red Aire Comprimido</li>
            </ul>
          </div>
          <div>
            <p> VERIFICACIÓN ELÉCTRICA </p>
            <GiElectric className={styles['verification-icon']} />
            <ul>
              <li>Generadores</li>
              <li>Eléctrica</li>
              <li>Transformadores</li>
              <li>Sistemas de Medición Electrónica</li>
              <li>Compresor de Aire Comprimido & Acometidas Eléctricas</li>
              <li>Sistema de Comprosores & red Aire Comprimido</li>
            </ul>
          </div>
        </div>
    )
  }