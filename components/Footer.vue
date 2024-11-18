<template>
  <footer class="footer footer-center bg-neutral text-neutral-content p-10">
    <aside>
      <div class="flex">
        <Icon name="tabler:circle-letter-d" size="36px" />
        <Icon name="tabler:circle-letter-i" size="36px" />
        <Icon name="tabler:circle-letter-t" size="36px" />
        <Icon name="tabler:circle-letter-e-filled" size="36px" />
        <Icon name="tabler:circle-letter-r-filled" size="36px" />
      </div>
      <p class="font-bold">
        {{ $t('dev') }} <a class="link" href="https://www.unifr.ch/nte/fr/">DIT Enseignement et Recherche</a>
        <br />
        {{ $t('educational_contents') }} <a class="link" href="https://www.unifr.ch/uni/fr/organisation/acad/didactique-universitaire/">{{ $t('didanum') }}</a>
      </p>
      <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/ch/deed.fr" class="link">
        {{ $t('copyright') }}
        <br>{{ $t('copyright2') }}
      </a>
      <div class="flex items-center">
        <Icon name="tabler:creative-commons" size="24px" />
        <Icon name="tabler:creative-commons-by" size="24px" />
        <Icon name="tabler:creative-commons-nc" size="24px" />
        <Icon name="tabler:creative-commons-sa" size="24px" />
      </div>
    </aside>
  </footer>
</template>