"use client";

import { useMemo, useState } from "react";
import { useUtility } from "@/state/UtilityContext";

type SupportInteractivePanelProps = {
  supportSlug: string;
};

type StoreLocation = {
  name: string;
  region: string;
  address: string;
  hours: string;
};

const storeLocations: StoreLocation[] = [
  {
    name: "Austin Service Hub",
    region: "South",
    address: "2210 Commerce Drive, Austin, TX 78701",
    hours: "Mon - Sat 08:00 AM - 08:00 PM",
  },
  {
    name: "Dallas Parts Center",
    region: "South",
    address: "890 Westgate Pkwy, Dallas, TX 75207",
    hours: "Mon - Sat 09:00 AM - 07:00 PM",
  },
  {
    name: "Denver Fleet Desk",
    region: "West",
    address: "561 Union Ave, Denver, CO 80216",
    hours: "Mon - Fri 08:30 AM - 06:30 PM",
  },
  {
    name: "Toronto Partner Bay",
    region: "Canada",
    address: "42 Harbour Front Ave, Toronto, ON M5J 2N8",
    hours: "Mon - Fri 09:00 AM - 06:00 PM",
  },
];

const orderPattern = /^GRX-\d{5,}$/i;

export default function SupportInteractivePanel({ supportSlug }: SupportInteractivePanelProps) {
  const { t } = useUtility();

  const [orderNumber, setOrderNumber] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderStatus, setOrderStatus] = useState<"idle" | "found" | "missing">("idle");

  const [feedbackSubject, setFeedbackSubject] = useState("");
  const [feedbackRating, setFeedbackRating] = useState("5");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState("all");

  const availableRegions = useMemo(() => {
    return Array.from(new Set(storeLocations.map((location) => location.region)));
  }, []);

  const visibleLocations = useMemo(() => {
    if (selectedRegion === "all") {
      return storeLocations;
    }

    return storeLocations.filter((location) => location.region === selectedRegion);
  }, [selectedRegion]);

  if (supportSlug === "track-order") {
    return (
      <section className="mt-10 border border-[#ececec] bg-[#fafafa] p-6">
        <h2 className="text-[20px] font-black uppercase text-[#222]">{t("support.track-order.formTitle")}</h2>

        <form
          className="mt-5 grid gap-4 md:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            const validOrder = orderPattern.test(orderNumber.trim());
            const validEmail = orderEmail.trim().includes("@");
            setOrderStatus(validOrder && validEmail ? "found" : "missing");
          }}
        >
          <label className="text-[12px] font-bold uppercase text-[#444]">
            {t("support.track-order.orderNumber")}
            <input
              type="text"
              required
              placeholder="GRX-10245"
              value={orderNumber}
              onChange={(event) => setOrderNumber(event.target.value)}
              className="mt-2 h-11 w-full border border-[#ddd] px-3 text-[14px]"
            />
          </label>

          <label className="text-[12px] font-bold uppercase text-[#444]">
            {t("support.track-order.orderEmail")}
            <input
              type="email"
              required
              value={orderEmail}
              onChange={(event) => setOrderEmail(event.target.value)}
              className="mt-2 h-11 w-full border border-[#ddd] px-3 text-[14px]"
            />
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-sm bg-[#ff3434] px-5 py-2 text-[12px] font-bold uppercase text-white"
            >
              {t("support.track-order.lookup")}
            </button>
          </div>
        </form>

        {orderStatus === "found" ? (
          <div className="mt-5 border border-[#d6f2df] bg-[#f0fff4] p-4 text-[14px] text-[#246b35]">
            <p className="font-bold uppercase">{t("support.track-order.foundTitle")}</p>
            <p className="mt-1">{t("support.track-order.foundBody")}</p>
          </div>
        ) : null}

        {orderStatus === "missing" ? (
          <div className="mt-5 border border-[#f7d5d5] bg-[#fff5f5] p-4 text-[14px] text-[#9c2f2f]">
            {t("support.track-order.notFound")}
          </div>
        ) : null}
      </section>
    );
  }

  if (supportSlug === "store-location") {
    return (
      <section className="mt-10 border border-[#ececec] bg-[#fafafa] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[12px] font-bold uppercase text-[#444]">{t("support.store-location.filterRegion")}</span>
          <select
            value={selectedRegion}
            onChange={(event) => setSelectedRegion(event.target.value)}
            className="h-10 min-w-44 border border-[#ddd] bg-white px-3 text-[13px] uppercase"
          >
            <option value="all">{t("support.store-location.regionAll")}</option>
            {availableRegions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {visibleLocations.map((location) => (
            <article key={location.name} className="border border-[#e8e8e8] bg-white p-4">
              <h3 className="text-[16px] font-black uppercase text-[#222]">{location.name}</h3>
              <p className="mt-2 text-[14px] text-[#666]">{location.address}</p>
              <p className="mt-2 text-[12px] font-bold uppercase text-[#555]">
                {t("support.store-location.hours")}: {location.hours}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (supportSlug === "customer-feedback") {
    return (
      <section className="mt-10 border border-[#ececec] bg-[#fafafa] p-6">
        <h2 className="text-[20px] font-black uppercase text-[#222]">{t("support.customer-feedback.formTitle")}</h2>

        <form
          className="mt-5 grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setFeedbackSubmitted(true);
            setFeedbackSubject("");
            setFeedbackRating("5");
            setFeedbackMessage("");
          }}
        >
          <label className="text-[12px] font-bold uppercase text-[#444]">
            {t("support.customer-feedback.subject")}
            <input
              type="text"
              required
              value={feedbackSubject}
              onChange={(event) => setFeedbackSubject(event.target.value)}
              className="mt-2 h-11 w-full border border-[#ddd] px-3 text-[14px]"
            />
          </label>

          <label className="text-[12px] font-bold uppercase text-[#444]">
            {t("support.customer-feedback.rating")}
            <select
              value={feedbackRating}
              onChange={(event) => setFeedbackRating(event.target.value)}
              className="mt-2 h-11 w-full border border-[#ddd] bg-white px-3 text-[14px]"
            >
              <option value="5">5 / 5</option>
              <option value="4">4 / 5</option>
              <option value="3">3 / 5</option>
              <option value="2">2 / 5</option>
              <option value="1">1 / 5</option>
            </select>
          </label>

          <label className="text-[12px] font-bold uppercase text-[#444]">
            {t("support.customer-feedback.message")}
            <textarea
              required
              rows={5}
              value={feedbackMessage}
              onChange={(event) => setFeedbackMessage(event.target.value)}
              className="mt-2 w-full border border-[#ddd] px-3 py-3 text-[14px]"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-sm bg-[#ff3434] px-5 py-2 text-[12px] font-bold uppercase text-white"
          >
            {t("support.customer-feedback.submit")}
          </button>
        </form>

        {feedbackSubmitted ? (
          <div className="mt-5 border border-[#d6f2df] bg-[#f0fff4] p-4 text-[14px] text-[#246b35]">
            {t("support.customer-feedback.success")}
          </div>
        ) : null}
      </section>
    );
  }

  return null;
}
