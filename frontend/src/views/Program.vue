<template>
  <div v-if="program">
    <div class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Programm</div>
      <div class="grid xl:grid-cols-4 gap-10 mt-10">
        <div>
          <div class="w-full">
            <div class="m-auto text-2xl text-center text-wemotion-purple">
              {{ moderation.title }}
            </div>
            <div class="flex border border-green-700 shadow-lg">
              <img
                v-if="moderation.image"
                :src="`https://directus.wemotion-wbtal.ch/assets/${moderation.image.id}`"
                class="m-auto p-1 object-contain h-full" />
            </div>
          </div>
        </div>
        <div class="xl:col-span-3">
          <Card class="bg-green-700 text-white shadow-xl mt-8 text:sm xl:text-base"
            ><div>
              <p>
                Die &laquo;Wemotion 2022&raquo; vereint explizite Kulinarik des Schweizer Spitzenkochs, gew&uuml;rzt mit
                einem Schuss Kultur, angerichtet im Leue Waldenburg. Der Fokus liegt auf den Jungtalenten, die in der
                K&uuml;che und auf der B&uuml;hne das Geschehen dominieren.
              </p>
              <p><br /></p>
              <p>
                Vom 22. &ndash; 24. September sind sie endlich da &ndash; die drei grossen Galaabende im Leue in
                Waldenburg. Ihre Schatten wirft die &laquo;Wemotion 2022&raquo; schon seit rund einem Jahr voraus: Dem
                neunk&ouml;pfigen Wemotion OK ist es eine besondere Ehre, dieses Jahr mit dem Sternekoch Stefan Wiesner,
                besser bekannt als &laquo;Hexer&raquo; aus dem Entlebuch, zusammenzuarbeiten. Diese Kooperation ist
                f&uuml;r die Jungtalente, welche einen der begehrten Pl&auml;tze ergattern konnten, ein einmaliges
                Erlebnis. Die Teilnahme ist hart verdient: Nur die Gewinner des &laquo;Goldenen Kochl&ouml;ffels&raquo;,
                eine Auszeichnung am Berufsbildungszentrum in Muttenz, durften einen Tag lang mit Stefan Wiesner durch
                die Natur streifen und in seiner K&uuml;che mit ihm zaubern. Dass muss man sich auf der Zunge zergehen
                lassen; Da sind diese Jungspunde noch nicht einmal ausgelernt und schwingen bereits mit dem Hexer den
                Kochl&ouml;ffel! Zum Dahinschmelzen war denn auch die auf dem Feuerring zubereitete Glace&hellip;
                Vorerst ging es jedoch etwas w&auml;hrschafter zu: Stefan Wiesner, bekannt daf&uuml;r, dass er seine
                G&auml;ste stets mit sehr experimenteller Kost und verr&uuml;ckter Naturk&uuml;che verw&ouml;hnt, griff
                kurzerhand zur Motors&auml;ge: &laquo;Ein Koch ohne Motors&auml;ge ist kein Koch&raquo;, meinte der
                Hexer lapidar und s&auml;gte vor den Augen der verdutzten Jungk&ouml;che und -K&ouml;chinnen einen
                Kirschbaumstamm in mundgerechte St&uuml;cke! Was f&uuml;r eine besondere Rolle die Kirsche an den
                Wemotion Abenden inne hat und was die Lehrlinge ausserdem beim Meister kreiert haben, k&ouml;nnen Sie an
                den Galadinnern im Leue mit allen Sinnen geniessen. Der Besuch beim Hexer wurde von einem Filmteam
                begleitet, mit den eingespielten Videosequenzen sind die G&auml;ste im Leue somit hautnah dabei. Wiesner
                selbst wird in Waldenburg voraussichtlich nicht anwesend sein.
              </p>
              <p>
                Die kullinarischen Erlebnisse sind an der &laquo;Wemotion&raquo; aber nur einer von vielen Leckerbissen.
                Die G&auml;ste d&uuml;rfen sich genauso auf die Cr&egrave;me de la Cr&egrave;me der Musikschule beider
                Frenkent&auml;ler freuen. F&uuml;r einen weiteren Ohren- und Augenschmaus sorgen die T&auml;nzerinnen
                und T&auml;nzer der Ballettschule Marina Amiet, das Vocal Trio Amuses Bouches und der &agrave; capella
                Chor Femtastix.
              </p>
            </div></Card
          >
        </div>
        <ProgramCard v-for="(item, index) in program.program" :key="index" :program="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';
import { computed } from 'vue';
import ProgramCard from '../components/ProgramCard.vue';
import Card from '../components/Card.vue';

const { data: program } = useQuery({
  query: `{
  program {
    id
    sort
    time
    title
    description
    image {
      id
    }
  }
}
`,
});

const moderation = computed(() => {
  return program.value.program.find((program: any) => program.sort === 1);
});
</script>
