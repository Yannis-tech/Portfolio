import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
// REACT POPUP
import Popup from 'reactjs-popup';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" href="#home">Home</a>
                                <br />
                                <a className="footer-nav" href="#about-me">About</a>
                                <br />
                            </div>
                            <div className="col">
                                <a className="footer-nav" href="#experience">Experience</a>
                                <br />
                                <a className="footer-nav" href="#portfolio">Work</a>
                                <br />
                                <a className="footer-nav" href="#contact">Contact</a>
                            </div>
                            <div className="col">
                                <Popup contentStyle={{position: "fixed",
                                    display: "flex",
                                    justifyContent: "center",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    overflowY: "auto"}}
                                trigger={<p className="footer-data">Datenschutz</p>} 
                                modal 
                                nested
                                >
                                {close => (
                                <div className="footer-popup">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="data-content">
                                    <div>
        <h1>Datenschutzerkl??rung</h1>
        <h2 id="m14">Einleitung</h2>
        <p>Mit der folgenden Datenschutzerkl??rung m??chten wir Sie dar??ber aufkl??ren, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten??? bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerkl??rung gilt f??r alle von uns durchgef??hrten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepr??senzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot???).</p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 27. Mai 2022</p><h2>Inhalts??bersicht</h2> <ul className="index"><li><a className="index-link" href="#m14">Einleitung</a></li><li><a className="index-link" href="#m3">Verantwortlicher</a></li><li><a className="index-link" href="#mOverview">??bersicht der Verarbeitungen</a></li><li><a className="index-link" href="#m27">Sicherheitsma??nahmen</a></li><li><a className="index-link" href="#m12">L??schung von Daten</a></li><li><a className="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a></li><li><a className="index-link" href="#m182">Kontakt- und Anfragenverwaltung</a></li><li><a className="index-link" href="#m15">??nderung und Aktualisierung der Datenschutzerkl??rung</a></li></ul><h2 id="m3">Verantwortlicher</h2><p>Yannis Pigorsch</p>
        E-Mail-Adresse: <p><a href="mailto:yannis.pigorsch@gmail.com">yannis.pigorsch@gmail.com</a></p>
        <h2 id="mOverview">??bersicht der Verarbeitungen</h2><p>Die nachfolgende ??bersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p><h3>Arten der verarbeiteten Daten</h3>
        <ul><li>Bestandsdaten.</li><li>Kontaktdaten.</li><li>Inhaltsdaten.</li><li>Nutzungsdaten.</li><li>Meta-/Kommunikationsdaten.</li></ul><h3>Kategorien betroffener Personen</h3><ul><li>Kommunikationspartner.</li><li>Nutzer.</li></ul><h3>Zwecke der Verarbeitung</h3><ul><li>Erbringung vertraglicher Leistungen und Kundenservice.</li><li>Kontaktanfragen und Kommunikation.</li><li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li><li>Informationstechnische Infrastruktur.</li></ul><h2 id="m27">Sicherheitsma??nahmen</h2><p>Wir treffen nach Ma??gabe der gesetzlichen Vorgaben unter Ber??cksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umst??nde und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausma??es der Bedrohung der Rechte und Freiheiten nat??rlicher Personen geeignete technische und organisatorische Ma??nahmen, um ein dem Risiko angemessenes Schutzniveau zu gew??hrleisten.</p>
        <p>Zu den Ma??nahmen geh??ren insbesondere die Sicherung der Vertraulichkeit, Integrit??t und Verf??gbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verf??gbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die L??schung von Daten und Reaktionen auf die Gef??hrdung der Daten gew??hrleisten. Ferner ber??cksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
        <p>SSL-Verschl??sselung (https): Um Ihre via unserem Online-Angebot ??bermittelten Daten zu sch??tzen, nutzen wir eine SSL-Verschl??sselung. Sie erkennen derart verschl??sselte Verbindungen an dem Pr??fix https:// in der Adresszeile Ihres Browsers.</p>
        <h2 id="m12">L??schung von Daten</h2><p>Die von uns verarbeiteten Daten werden nach Ma??gabe der gesetzlichen Vorgaben gel??scht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie f??r den Zweck nicht erforderlich sind).</p>
        <p>Sofern die Daten nicht gel??scht werden, weil sie f??r andere und gesetzlich zul??ssige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschr??nkt. D.h., die Daten werden gesperrt und nicht f??r andere Zwecke verarbeitet. Das gilt z.B. f??r Daten, die aus handels- oder steuerrechtlichen Gr??nden aufbewahrt werden m??ssen oder deren Speicherung zur Geltendmachung, Aus??bung oder Verteidigung von Rechtsanspr??chen oder zum Schutz der Rechte einer anderen nat??rlichen oder juristischen Person erforderlich ist.</p>
        <p>Unsere Datenschutzhinweise k??nnen ferner weitere Angaben zu der Aufbewahrung und L??schung von Daten beinhalten, die f??r die jeweiligen Verarbeitungen vorrangig gelten.</p>
        <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2><p>Um unser Onlineangebot sicher und effizient bereitstellen zu k??nnen, nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen werden kann. Zu diesen Zwecken k??nnen wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazit??t, Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.</p>
        <p>Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten k??nnen alle die Nutzer unseres Onlineangebotes betreffenden Angaben geh??ren, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu geh??ren regelm????ig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu k??nnen, und alle innerhalb unseres Onlineangebotes oder von Webseiten get??tigten Eingaben.</p>
        <ul className="m-elements"><li><strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Ger??te-Informationen, IP-Adressen).</li><li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li><li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Ger??ten (Computer, Server etc.).).</li><li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li></ul><p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p><ul className="m-elements"><li><strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen der Empf??nger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z.B. die beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten k??nnen ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet grunds??tzlich nicht verschl??sselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschl??sselt, aber (sofern kein sogenanntes Ende-zu-Ende-Verschl??sselungsverfahren eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und empfangen werden. Wir k??nnen daher f??r den ??bertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server keine Verantwortung ??bernehmen.</li></ul><h2 id="m182">Kontakt- und Anfragenverwaltung</h2><p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Gesch??ftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Ma??nahmen erforderlich ist.</p>
        <p>Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erf??llung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im ??brigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen und Pflege von Nutzer- bzw. Gesch??ftsbeziehungen.</p>
        <ul className="m-elements"><li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li><li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li><li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Erbringung vertraglicher Leistungen und Kundenservice.</li><li><strong>Rechtsgrundlagen:</strong> Vertragserf??llung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).</li></ul><p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p><ul className="m-elements"><li><strong>Kontaktformular: </strong>Wenn Nutzer ??ber unser Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen vorvertraglicher und vertraglicher Gesch??ftsbeziehungen, soweit dies zu deren Erf??llung erforderlich ist und im ??brigen auf Grundlage unserer berechtigten Interessen sowie der Interessen der Kommunikationspartner an der Beantwortung der Anliegen und unserer gesetzlichen Aufbewahrungspflichten.</li></ul><h2 id="m15">??nderung und Aktualisierung der Datenschutzerkl??rung</h2><p>Wir bitten Sie, sich regelm????ig ??ber den Inhalt unserer Datenschutzerkl??rung zu informieren. Wir passen die Datenschutzerkl??rung an, sobald die ??nderungen der von uns durchgef??hrten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die ??nderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
        <p>Sofern wir in dieser Datenschutzerkl??rung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich ??ber die Zeit ??ndern k??nnen und bitten die Angaben vor Kontaktaufnahme zu pr??fen.</p>
        <p className="seal"><a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - f??r weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow"><img src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png" alt="Rechtstext von Dr. Schwenke - f??r weitere Informationen bitte anklicken." width={250} height={250} /></a></p>
      </div>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="btn-popup btn-popup-close"
                                            onClick={() => {
                                                close();
                                            }}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                                </Popup>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <p>Share my site:</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Yannis Pigorsch | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;