<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;
use App\Http\Resources\EventCollection;
use App\Http\Resources\EventResource;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EventResource::collection(Event::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEventRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEventRequest $request)
    {
        $dateFrom = Carbon::parse($request->dateFrom);
        $dateTo = Carbon::parse($request->dateTo);
        // Get All Valid Days
        $validDays = CarbonPeriod::create($dateFrom, $dateTo)->filter(
            fn(Carbon $date) => in_array($date->weekday(), $request->days)
        )->toArray();
        
        $events = array_map(fn ($event) =>
            [
                'name' => $request->name,
                'date' => $event
            ]
        , $validDays);

        // Create Event For Each Period
       Event::insert($events);
       
       // Return count of all events created
       return response(count($validDays), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEventRequest  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }
}
