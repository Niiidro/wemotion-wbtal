<template>
  <div class="grid grid-cols-2 gap-10 mt-20">
    <Card class="bg-green-700 text-white shadow-xl">
      <div class="text-2xl mb-5">Wemotion – musicularium</div>
      <div>
        <p>
          Junge Talente und erfahrene Talentierte präsentieren Leckerbissen der Kunst und Kulinarik im Wemotion
          musicularium.
        </p>
        <br />
        <p>
          Vom 22. – 24. September 2022 werden im modernen Leue-Saal in Waldenburg Musik, Tanz und Kochkunst gelebt und
          zelebriert. Der Verein „Wemotion – WB Tal“ leistet mit der Kulturveranstaltung einen gehaltvollen Bei-trag zu
          einer schönen Lebendigkeit und Lebensqualität in der Region.
        </p>
        <br />
        <p>
          Unterschiedlichste Darbietungen, präsentiert in einem zeitgemässen Rahmen und einer tollen Atmosphäre, zeigen,
          wie sich Kunst und Kulinarik, Jung und Alt, Modernes und Bewährtes verbinden und Neues entstehen kann.
        </p>
        <br />
        <p>Wir heissen Sie herzlich willkommen!</p>
      </div>
    </Card>
    <Card class="bg-green-700 text-white">
      <div class="text-2xl mb-5">Was ist Wemotion - musicularium überhaupt?</div>
      <div>
        <p>
          Wemotion-wbtal ist eine öffentliche Kulturveranstaltung im Waldenburgertal mit Qualitäts-anspruch, getragen
          durch eine ambitionierte Organisation, geprägt durch bemerkenswerte Leistung in künstlerischem Ausdruck,
          motiviert durch einen grundsätzlichen Fördergedan-ken, inszeniert mit zeitgemässer Event-Technik in einem
          originellen, themenbezogenen Rahqmen.
        </p>
        <br />
        <p>
          Wemotion-wbtal ist eine öffentliche Kulturveranstaltung im Waldenburgertal mit Qualitäts-anspruch, getragen
          durch eine ambitionierte Organisation, geprägt durch bemerkenswerte Leistung in künstlerischem Ausdruck,
          motiviert durch einen grundsätzlichen Fördergedan-ken, inszeniert mit zeitgemässer Event-Technik in einem
          originellen, themenbezogenen Rah-men.
        </p>
        <br />
        <p>
          Die Wortschöpfung «musicularium» zeigt die Verbindung von Kunst und Kulinarik und verkörpert Kreativität und
          kulturelle Leistung mit Innovationen und neuen Idee.
        </p>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from '@/components/Card.vue';
import { useQuery } from 'villus';

const { data } = useQuery({
  query: `{
    cards(filter: { page: { _eq: "home" } }) {
      id
      page
      title
      text
    }
  }
`,
});
</script>
