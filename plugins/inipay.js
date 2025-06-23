import Inipay from "~/assets/script/inicis/inipay";

export default function(ctx, inject) {
  inject(
    "inipay",
    new Inipay({
      signKey: "SU5JTElURV9UUklQTEVERVNfS0VZU1RS",
      P_MID: "INIpayTest"
    })
  );
}