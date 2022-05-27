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
        <h1>Datenschutzerklärung</h1>
        <h2 id="m14">Einleitung</h2>
        <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).</p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 27. Mai 2022</p><h2>Inhaltsübersicht</h2> <ul className="index"><li><a className="index-link" href="#m14">Einleitung</a></li><li><a className="index-link" href="#m3">Verantwortlicher</a></li><li><a className="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li><li><a className="index-link" href="#m27">Sicherheitsmaßnahmen</a></li><li><a className="index-link" href="#m12">Löschung von Daten</a></li><li><a className="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a></li><li><a className="index-link" href="#m182">Kontakt- und Anfragenverwaltung</a></li><li><a className="index-link" href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</a></li></ul><h2 id="m3">Verantwortlicher</h2><p>Yannis Pigorsch</p>
        E-Mail-Adresse: <p><a href="mailto:yannis.pigorsch@gmail.com">yannis.pigorsch@gmail.com</a></p>
        <h2 id="mOverview">Übersicht der Verarbeitungen</h2><p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p><h3>Arten der verarbeiteten Daten</h3>
        <ul><li>Bestandsdaten.</li><li>Kontaktdaten.</li><li>Inhaltsdaten.</li><li>Nutzungsdaten.</li><li>Meta-/Kommunikationsdaten.</li></ul><h3>Kategorien betroffener Personen</h3><ul><li>Kommunikationspartner.</li><li>Nutzer.</li></ul><h3>Zwecke der Verarbeitung</h3><ul><li>Erbringung vertraglicher Leistungen und Kundenservice.</li><li>Kontaktanfragen und Kommunikation.</li><li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li><li>Informationstechnische Infrastruktur.</li></ul><h2 id="m27">Sicherheitsmaßnahmen</h2><p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
        <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
        <p>SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.</p>
        <h2 id="m12">Löschung von Daten</h2><p>Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).</p>
        <p>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.</p>
        <p>Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.</p>
        <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2><p>Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.</p>
        <p>Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.</p>
        <ul className="m-elements"><li><strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li><li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li><li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.).).</li><li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li></ul><p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p><ul className="m-elements"><li><strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z.B. die beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet grundsätzlich nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen.</li></ul><h2 id="m182">Kontakt- und Anfragenverwaltung</h2><p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
        <p>Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen und Pflege von Nutzer- bzw. Geschäftsbeziehungen.</p>
        <ul className="m-elements"><li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li><li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li><li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Erbringung vertraglicher Leistungen und Kundenservice.</li><li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).</li></ul><p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p><ul className="m-elements"><li><strong>Kontaktformular: </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen vorvertraglicher und vertraglicher Geschäftsbeziehungen, soweit dies zu deren Erfüllung erforderlich ist und im Übrigen auf Grundlage unserer berechtigten Interessen sowie der Interessen der Kommunikationspartner an der Beantwortung der Anliegen und unserer gesetzlichen Aufbewahrungspflichten.</li></ul><h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2><p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
        <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
        <p className="seal"><a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow"><img src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png" alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." width={250} height={250} /></a></p>
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