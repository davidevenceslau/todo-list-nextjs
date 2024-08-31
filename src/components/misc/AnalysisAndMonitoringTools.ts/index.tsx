"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";
import LogRocket from "logrocket";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function AnalysisAndMonitoringTools() {
  useEffect(() => {
    Hotjar.init(5118233, 6);
    LogRocket.init("cu2kko/lista-de-tarefas");
  });

  return <GoogleAnalytics gaId="G-YZKQHDQHFH" />;
}
