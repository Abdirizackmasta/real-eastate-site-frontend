import React, { useEffect, useMemo, useState } from "react";
import PropertyCard from "../property-card/propertyCard"; // adjust path if needed
import properties from "../../assets/demoData"; // your provided data path
import styles from "./Propertylist.module.css";

const PER_PAGE = 12;

export default function AllProperties() {
  // filter state
  const [titleSearch, setTitleSearch] = useState(""); // search by title (text)
  const [locationFilter, setLocationFilter] = useState(""); // location exact/partial from select
  const [typeFilter, setTypeFilter] = useState("");
  const [transactionFilter, setTransactionFilter] = useState("");
  const [bedroomsFilter, setBedroomsFilter] = useState("");
  const [sort, setSort] = useState("newest"); // newest default
  const [page, setPage] = useState(1);

  // derived lists for selects
  const uniqueTypes = useMemo(
    () => Array.from(new Set(properties.map((p) => p.type).filter(Boolean))),
    []
  );
  const uniqueLocations = useMemo(
    () =>
      Array.from(
        new Set(
          properties
            .map((p) => p.location)
            .filter(Boolean)
            .map((l) => l.trim())
        )
      ),
    []
  );

  // transaction options depend on type
  const transactionOptions = useMemo(() => {
    return typeFilter === "land"
      ? ["sale", "lease"]
      : ["sale", "rent", "lease"];
  }, [typeFilter]);

  // detect active filters (for showing Clear button)
  const hasActiveFilters = useMemo(
    () =>
      !!(
        titleSearch.trim() ||
        locationFilter ||
        typeFilter ||
        transactionFilter ||
        bedroomsFilter ||
        (sort && sort !== "newest")
      ),
    [
      titleSearch,
      locationFilter,
      typeFilter,
      transactionFilter,
      bedroomsFilter,
      sort,
    ]
  );

  // main filtered list (cumulative AND filters)
  const filtered = useMemo(() => {
    const q = titleSearch.trim().toLowerCase();

    let res = properties.filter((p) => {
      // title search (partial match) - only title of property
      const titleMatches = !q || (p.title && p.title.toLowerCase().includes(q));

      // location filter (if selected) - match partial (case-insensitive)
      const locationMatches =
        !locationFilter ||
        (p.location &&
          p.location.toLowerCase().includes(locationFilter.toLowerCase()));

      // type filter exact match
      const typeMatches =
        !typeFilter ||
        (p.type && p.type.toLowerCase() === typeFilter.toLowerCase());

      // transaction: must match selected transaction if any
      const transactionMatches =
        !transactionFilter ||
        (p.transaction &&
          p.transaction.toLowerCase() === transactionFilter.toLowerCase());

      // bedrooms: only apply if bedroomsFilter selected AND property has bedrooms
      const bedroomsMatches =
        !bedroomsFilter ||
        (p.bedrooms !== undefined &&
          Number(p.bedrooms) === Number(bedroomsFilter));

      return (
        titleMatches &&
        locationMatches &&
        typeMatches &&
        transactionMatches &&
        bedroomsMatches
      );
    });

    // sorting
    if (sort === "low") {
      res.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "high") {
      res.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === "newest") {
      res.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
    }

    return res;
  }, [
    titleSearch,
    locationFilter,
    typeFilter,
    transactionFilter,
    bedroomsFilter,
    sort,
  ]);

  // pagination derived
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const startIndex = (page - 1) * PER_PAGE;
  const pageItems = filtered.slice(startIndex, startIndex + PER_PAGE);

  // reset page to 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [
    titleSearch,
    locationFilter,
    typeFilter,
    transactionFilter,
    bedroomsFilter,
    sort,
  ]);

  // scroll to top when page changes
  useEffect(() => {
    // smooth scroll to top of container
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const clearFilters = () => {
    setTitleSearch("");
    setLocationFilter("");
    setTypeFilter("");
    setTransactionFilter("");
    setBedroomsFilter("");
    setSort("newest");
    setPage(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <h1>Property Listings</h1>
        <p>Browse through our extensive list of properties.</p>
      </div>
      <header className={styles.topBar}>
        <div className={styles.leftControls}>
          <input
            type="text"
            placeholder="Search title..."
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
            className={styles.input}
            aria-label="Search by title"
          />

          <select
            className={styles.select}
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            aria-label="Filter by location"
          >
            <option value="">All locations</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className={styles.select}
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              // reset dependent filters
              setTransactionFilter("");
              setBedroomsFilter("");
            }}
            aria-label="Filter by type"
          >
            <option value="">All types</option>
            {uniqueTypes.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>

          {/* show bedrooms only if not land */}
          {typeFilter !== "land" && (
            <select
              className={styles.select}
              value={bedroomsFilter}
              onChange={(e) => setBedroomsFilter(e.target.value)}
              aria-label="Filter by bedrooms"
            >
              <option value="">Any bedrooms</option>
              <option value="1">1 bed</option>
              <option value="2">2 beds</option>
              <option value="3">3 beds</option>
              <option value="4">4+ beds</option>
            </select>
          )}

          <select
            className={styles.select}
            value={transactionFilter}
            onChange={(e) => setTransactionFilter(e.target.value)}
            aria-label="Filter by transaction"
          >
            <option value="">All transactions</option>
            {transactionOptions.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>

          <select
            className={styles.select}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort"
          >
            <option value="newest">Newest</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>

          {hasActiveFilters && (
            <button className={styles.clearBtn} onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>

        <div className={styles.count}>
          <strong>{filtered.length}</strong> properties found
        </div>
      </header>

      <main className={styles.gridWrap}>
        {pageItems.length > 0 ? (
          <div className={styles.grid}>
            {pageItems.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>No properties match your selected filters.</p>
          </div>
        )}
      </main>

      {/* pagination */}
      {filtered.length > 0 && (
        <footer className={styles.pagination}>
          <button
            onClick={() => setPage((s) => Math.max(1, s - 1))}
            disabled={page === 1}
            className={styles.pageBtn}
          >
            Prev
          </button>

          <div className={styles.pageNumbers}>
            Page {page} of {totalPages}
          </div>

          <button
            onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
            disabled={page === totalPages}
            className={styles.pageBtn}
          >
            Next
          </button>
        </footer>
      )}
    </div>
  );
}
