import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles.sass';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faMobileAlt, faEnvelope, faPrint, faFileWord, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faMapMarkerAlt, faMobileAlt, faEnvelope, faLinkedin, faPrint, faFileWord, faFilePdf)
dom.watch()
