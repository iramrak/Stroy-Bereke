import '../../src/sass/firstbanner.scss';
import pdficon from '../../public/image/pfd-btn.svg'

export const FirstBanner = () => {
  return (
    <section className="first-banner">
        <div className="f-banner__content">
            <div className="f-sub-title">
                <p>[02] - Прайс-лист</p>
            </div>
            <h1>Скачайте наш <br /> Прайс-лист в PDF</h1>
            <a href="#">
                <div className="pdf-btn">
                    <p>Скачать в PDF</p>
                    <img src={pdficon} alt="pdficon" />
                </div>
            </a>
        </div>
    </section>
  );
};