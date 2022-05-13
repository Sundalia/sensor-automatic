import React from "react";
import '../App.css';
import {Container} from "react-bootstrap";

export default function About() {
    return(
        <Container fluid>
            <h1 className="h1main">О НАШЕЙ КОМПАНИИ</h1>
            <hr className="redline"/>
            <div className="maintext">
                <p>Компания ООО "Сенсор Автоматика" занимается производством и поставками промышленного контрольно-измерительного оборудования
                на территории России и стран ЕЭП, а также является официальным дистрибьютором компании ZILA GmbH в Российской Федерации.
                Наши специалисты помогут Вам подобрать оборудование непосредственно для решения Вашей задачи. Все сотрудники ООО "Сенсор Автоматика"
                много лет работают с промышленными приборами для измерения давления, уровня, температуры, учета расхода жидкостей,
                смесей и газов и прочих областей промышленности и сфер применения.</p>

                <p>Миссия нашей компании заключается в предоставлении гарантий и максимальной выгоды нашим заказчикам и партнёрам при решении их задач.
                Мы готовы и можем достигать новых технических высот в области промышленного измерения вместе с теми, кто находится рядом.</p>
            </div>
        </Container>
    )
}