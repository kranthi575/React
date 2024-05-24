import { Link } from "react-router-dom";
import "../../index.css";
const Footer=()=>{
    return <div className="footer border border-t-[4px] border-solid border-black shadow-sm">
        <img className="footerFoodLogo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAAABAQG6uro3Nzezs7MsLCzq6upJSUkICAiwsLDg4ODz8/ORkZGIiIi+vr5DQ0M9PT3Hx8dcXFyampoZGRlSUlLY2Nh2dnZ8fHwxMTEeHh7Nzc2pqakREREjIyNra2t0kfewAAADb0lEQVR4nO2a246jMAyGccuZlAbCuYXy/k+5OcBAKCuN9gJHK38zqiDqxa8/jmMn9TyCIAiCIAiCIAiCIAiCIP5rGLaAE7LORVXwxlZwQtdhKzihBGwFJzAeYEs4IZ+xFZwQJS22hBPCFFvBAVY+y94vnz+4kCCiAWxmbEUSJqSQ2+6vx1akEAencmxBivvDInchprwgt8mwBSnGw/Q5kbNKuO0AcKKQyazVB27szsx2qsbWY7Cd4thyDPXeKnCk4msspx7Ycgy95dTdDLZ5E8c85jwuqieCqMpyqtRjzxr6YcpBCHgAxnYY7JxacucbppAXn7jwB7+pQ4Q5LfdO1XqXmYH30DdQJVBB0yNk1PdeFI/UkF8UfqE/zP/n8g2xDbf5A6E9SQObNLpaVBTvnFJpStZ9iQ28ri5opIbNKbXQWvimuliUDOttO1brjHWf8AC/vKDZsifAqEfSA+P1lV/+syUDmOw92D4NCN2qrD0Xn8A3y2w+htT1lV+5ODXNojEjWSPC1bwbRpib2lNRN7NYht7da+cTSuUwxJpG9jLrUFTFC7y/NkdlC9ECY9EZ69eyKyKL8dC3kOUTVzUUj0Ue+19MlxyuRceW/QdefI9do0l6lTZ/k3XklTvRpbpANs+2F+whLq9Yjjxl1Oy3uKhZiitMysnOkp0L7dZbimpWa9pS7T0lqiDFM5FLbJm/dopkt/BCnz3ZaW1BVYjoAxDjClLInhRCs9wyGFtZHeCHlCz11l5GFlhl5URIMXWevhQJ3cBi+YZ/+qmsAXMdEnHBZDk1oKdO3Sa/ouW5VaezM/bik4tNlr2+eRGxagXxT/n1wRkU+vndMD2XI7ImLwHdzeiYyligJCYYZ2UWSz8DIB5jFWrbQuw4Z1vnp1GPBa6kKPVi64hRfyD0entNHB4yWe6P+KWmBHX2WCibhIrtvNLZAXWPiYre642q209c+RVulHPoVZG5eQVTc8fO5WOil9vilTo4cOFqNFhzlPaqxy8NNOMEJpYqNrvgkiEFJ1LTgXT1Cn0P3mO8Wk88XSFI1L0MflFuMzrnkyIIXfNJgV0+EQRBEARBEARBEARBEARBEP/A3UG83/408kq89a51+z3p7UK+9OhRz1yOdbz1O38WsRD1163+P73+6qswhZ/pNYXFK/SL0B/8Wg//AQpFLD/BT2QYAAAAAElFTkSuQmCC" alt="company logo"></img>
        <ul className="CompanyArticels"> 

            <li ><div>Company</div></li>
            <li className="footerLinks">  <Link to="/about">About</Link></li>
            <li className="footerLinks"><Link to="/carrers">Carrers</Link></li>
            <li className="footerLinks"><Link to="/contact">Contact</Link></li>

        </ul>
        
    </div>

}
export default Footer;